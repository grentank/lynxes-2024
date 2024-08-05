const { Message, User } = require('../../db/models');

const connections = new Map(); // in-memory DB

const connectionCb = async (socket, request, user) => {
  connections.set(user.id, { ws: socket, user });

  connections.forEach(async (connection) => {
    const { ws } = connection;
    const allUsers = [...connections.values()].map(({ user: u }) => u);
    const action = {
      type: 'SET_USERS',
      payload: allUsers,
    };
    ws.send(JSON.stringify(action));
  });
  const allMessages = await Message.findAll({
    include: User,
  });
  socket.send(JSON.stringify({ type: 'SET_MESSAGES', payload: allMessages }));

  socket.on('close', () => {
    connections.delete(user.id);
    connections.forEach((connection) => {
      const { ws } = connection;
      const allUsers = [...connections.values()].map(({ user: u }) => u);
      const action = {
        type: 'SET_USERS',
        payload: allUsers,
      };
      ws.send(JSON.stringify(action));
    });
  });

  socket.on('error', () => {
    connections.delete(user.id);
    connections.forEach((connection) => {
      const { ws } = connection;
      const allUsers = [...connections.values()].map(({ user: u }) => u);
      const action = {
        type: 'SET_USERS',
        payload: allUsers,
      };
      ws.send(JSON.stringify(action));
    });
  });

  socket.on('message', async (message) => {
    const actionFromFront = JSON.parse(message);
    const { type, payload } = actionFromFront;
    switch (type) {
      case 'NEW_MESSAGE':
        {
          const newMessage = await Message.create({ body: payload, userId: user.id });
          const newMessageWithUser = await Message.findOne({
            where: { id: newMessage.id },
            include: User,
          });
          const action = {
            type: 'ADD_MESSAGE',
            payload: newMessageWithUser,
          };
          connections.forEach((connection) => {
            const { ws } = connection;
            ws.send(JSON.stringify(action));
          });
        }
        break;

      default:
        break;
    }
  });

  //   const userId = request.session.user.id;

  //   map.set(userId, { ws: socket, user: request.session.user });

  //   function sendUsers(activeConnections) {
  //     activeConnections.forEach(({ ws }) => {
  //       ws.send(
  //         JSON.stringify({
  //           type: 'SET_USERS',
  //           payload: [...map.values()].map(({ user }) => user),
  //         }),
  //       );
  //     });
  //   }

  //   sendUsers(map);

  //     const actionFromFront = JSON.parse(message);
  //     const { type, payload } = actionFromFront;
  //     switch (type) {
  //       case SEND_MESSAGE:
  //         Message.create({ text: payload, authorId: userId }).then(async (newMessage) => {
  //           const newMessageWithAuthor = await Message.findOne({
  //             where: { id: newMessage.id },
  //             include: User,
  //           });
  //           map.forEach(({ ws }) => {
  //             ws.send(
  //               JSON.stringify({
  //                 type: ADD_MESSAGE,
  //                 payload: newMessageWithAuthor,
  //               }),
  //             );
  //           });
  //         });
  //         break;

  //       case DELETE_MESSAGE:
  //         Message.findOne({ where: { id: payload } }).then(async (targetMessage) => {
  //           if (targetMessage.authorId !== userId) return;
  //           await Message.destroy({ where: { id: payload } });
  //           map.forEach(({ ws }) => {
  //             ws.send(
  //               JSON.stringify({
  //                 type: HIDE_MESSAGE,
  //                 payload,
  //               }),
  //             );
  //           });
  //         });
  //         break;

  //       default:
  //         break;
  //     }
  //     console.log(`Received message ${message} from user ${userId}`);
  //   });

  //   socket.on('close', () => {
  //     map.delete(userId);
  //     sendUsers(map);
  //   });
};

module.exports = connectionCb;
