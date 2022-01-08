declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URL: string;
      SECRET_KEY: string;
      PORT: number;
    }
  }
}

declare namespace Express {
  export interface Request {
    user?: {
      name: string;
      email: string;
    }
  }
}

export {}