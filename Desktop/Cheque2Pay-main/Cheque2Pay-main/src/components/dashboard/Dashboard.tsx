import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Cheque, Transaction } from '../../types';
import { 
  Upload, 
  FileText, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Plus,
  Eye
} from 'lucide-react';
import ChequeUpload from './ChequeUpload';
import ChequeList from './ChequeList';
import TransactionHistory from './TransactionHistory';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'upload' | 'cheques' | 'transactions'>('overview');
  const [cheques, setCheques] = useState<Cheque[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Load mock data
    const mockCheques: Cheque[] = [
      {
        id: '1',
        userId: user?.id || '1',
        amount: 50000,
        payeeName: 'ABC Corporation',
        bankName: 'HDFC Bank',
        chequeNumber: '123456',
        date: '2024-01-15',
        status: 'completed',
        imageUrl: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400',
        createdAt: '2024-01-15T10:30:00Z',
        processedAt: '2024-01-15T10:32:00Z'
      },
      {
        id: '2',
        userId: user?.id || '1',
        amount: 25000,
        payeeName: 'XYZ Services',
        bankName: 'SBI',
        chequeNumber: '789012',
        date: '2024-01-14',
        status: 'processing',
        imageUrl: 'https://images.pexels.com/photos/3943717/pexels-photo-3943717.jpeg?auto=compress&cs=tinysrgb&w=400',
        createdAt: '2024-01-14T15:20:00Z'
      }
    ];

    const mockTransactions: Transaction[] = [
      {
        id: '1',
        chequeId: '1',
        userId: user?.id || '1',
        amount: 50000,
        status: 'completed',
        type: 'upi',
        recipientName: 'ABC Corporation',
        recipientAccount: 'abc@paytm',
        createdAt: '2024-01-15T10:30:00Z',
        completedAt: '2024-01-15T10:32:00Z'
      }
    ];

    setCheques(mockCheques);
    setTransactions(mockTransactions);
  }, [user]);

  const stats = {
    totalProcessed: cheques.reduce((sum, cheque) => sum + (cheque.status === 'completed' ? cheque.amount : 0), 0),
    totalCheques: cheques.length,
    successRate: cheques.length > 0 ? Math.round((cheques.filter(c => c.status === 'completed').length / cheques.length) * 100) : 0,
    pendingCheques: cheques.filter(c => c.status === 'pending' || c.status === 'processing').length
  };

  const handleChequeUpload = (newCheque: Omit<Cheque, 'id' | 'userId' | 'createdAt'>) => {
    const cheque: Cheque = {
      ...newCheque,
      id: Date.now().toString(),
      userId: user?.id || '1',
      createdAt: new Date().toISOString()
    };
    setCheques(prev => [cheque, ...prev]);
    setActiveTab('cheques');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 mt-2">Manage your cheque processing and track transactions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Processed</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.totalProcessed.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Cheques</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalCheques}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Success Rate</p>
                <p className="text-2xl font-bold text-gray-900">{stats.successRate}%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingCheques}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: TrendingUp },
                { id: 'upload', label: 'Upload Cheque', icon: Upload },
                { id: 'cheques', label: 'My Cheques', icon: FileText },
                { id: 'transactions', label: 'Transactions', icon: CheckCircle }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'overview' | 'upload' | 'cheques' | 'transactions')}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => setActiveTab('upload')}
                        className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-all flex items-center justify-center"
                      >
                        <Plus className="h-5 w-5 mr-2" />
                        Upload New Cheque
                      </button>
                      <button
                        onClick={() => setActiveTab('cheques')}
                        className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-all flex items-center justify-center"
                      >
                        <Eye className="h-5 w-5 mr-2" />
                        View All Cheques
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      {cheques.slice(0, 3).map((cheque) => (
                        <div key={cheque.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{cheque.payeeName}</p>
                            <p className="text-sm text-gray-600">₹{cheque.amount.toLocaleString()}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            cheque.status === 'completed' ? 'bg-green-100 text-green-800' :
                            cheque.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {cheque.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'upload' && (
              <ChequeUpload onUpload={handleChequeUpload} />
            )}

            {activeTab === 'cheques' && (
              <ChequeList cheques={cheques} />
            )}

            {activeTab === 'transactions' && (
              <TransactionHistory transactions={transactions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;