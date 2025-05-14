import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

interface ApiError {
  message: string;
  status?: number;
  data?: any;
}

class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/api`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        const apiError: ApiError = {
          message: 'An unexpected error occurred',
          status: error.response?.status,
          data: error.response?.data,
        };

        if (error.response) {
          switch (error.response.status) {
            case 400:
              apiError.message = 'Bad Request';
              break;
            case 401:
              apiError.message = 'Unauthorized';
              break;
            case 403:
              apiError.message = 'Forbidden';
              break;
            case 404:
              apiError.message = 'Not Found';
              break;
            case 500:
              apiError.message = 'Internal Server Error';
              break;
            default:
              apiError.message = `Error: ${error.response.status}`;
          }
        } else if (error.request) {
          apiError.message = 'No response received from server';
        } else {
          apiError.message = error.message || 'Error setting up request';
        }

        console.error('API Error:', apiError);

        return Promise.reject(apiError);
      }
    );
  }

  public getInstance(): AxiosInstance {
    return this.instance;
  }
}

const apiClient = new ApiClient();
export default apiClient.getInstance();
