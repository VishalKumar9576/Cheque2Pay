export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  isVerified: boolean;
  plan: 'free' | 'pro';
  createdAt: string;
}

export interface Cheque {
  id: string;
  userId: string;
  amount: number;
  payeeName: string;
  bankName: string;
  chequeNumber: string;
  date: string;
  status: 'pending' | 'processing' | 'verified' | 'completed' | 'failed';
  imageUrl: string;
  createdAt: string;
  processedAt?: string;
}

export interface Transaction {
  id: string;
  chequeId: string;
  userId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  type: 'upi' | 'neft' | 'rtgs';
  recipientName: string;
  recipientAccount: string;
  createdAt: string;
  completedAt?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  loading: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone: string;
}