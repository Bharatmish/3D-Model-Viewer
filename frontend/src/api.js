import axios from 'axios';

/**
 * Fetches the 3D model information from the backend.
 * @param {string} modelId - The unique ID of the 3D model.
 * @returns {Promise} - Axios promise resolving with the 3D model data.
 */
export const getModelInfo = (modelId) => {
  return axios.get(`/arinfo/${modelId}`);
};
