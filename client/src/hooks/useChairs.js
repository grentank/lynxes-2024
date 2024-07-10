import { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

function useChairs({ url = '/chairs', initChairs = [{ id: 1 }, { id: 2 }, { id: 3 }] }) {
  const [chairs, setChairs] = useState(initChairs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(url)
      .then((res) => setChairs(res.data))
      .catch(() => setChairs([]))
      .finally(() => setLoading(false));
  }, []);

  const deleteChairHandler = async (chairId) => {
    const res = await axiosInstance.delete(`/chairs/${chairId}`);
    if (res.status === 204) {
      setChairs((prev) => prev.filter((chair) => chair.id !== chairId));
    }
  };

  const addChairHandler = async (formData) => {
    const res = await axiosInstance.post('/chairs', formData);
    if (res.status === 201) {
      setChairs((prev) => [...prev, res.data]);
    }
  };

  return {
    chairs,
    loading,
    deleteChairHandler,
    addChairHandler,
  };
}

export default useChairs;
