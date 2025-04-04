// src/services/apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://rusiot.local:8123/api/services', // Proxy will handle forwarding to Home Assistant
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3YmRhYmMyZjQ5ODY0ZDVmYmM4MmNhNTFhMzk5NWNiOCIsImlhdCI6MTc0MzEwNzkwNiwiZXhwIjoyMDU4NDY3OTA2fQ.LD2nxdhOHReQRl7XjO-zSm0GZvZStpz90TIOAJXhz7c'
  },
});


export const apiService = {
  async turnLightOn(entityId) {
    try {
      const response = await apiClient.post(`/switch/turn_on`, {
        entity_id: entityId,
      });
      return response.data;
    } catch (error) {
      console.error('Error turning light on:', error);
      throw error;
    }
  },
  async turnLightOff(entityId) {
    try {
      const response = await apiClient.post(`/switch/turn_off`, {
        entity_id: entityId,
      });
      return response.data;
    } catch (error) {
      console.error('Error turning light off:', error);
      throw error;
    }
  },
};