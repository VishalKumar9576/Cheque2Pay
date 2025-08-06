import React, { useState } from 'react';
import { Cheque } from '../../types';
import { Eye, Download, Clock, CheckCircle, AlertCircle, XCircle, Filter } from 'lucide-react';

interface ChequeListProps {
  cheques: Cheque[];
}

const ChequeList: React.FC<ChequeListProps> = ({ cheques }) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'processing' | 'completed' | 'failed'>('all');
  const [selectedCheque, setSelectedCheque] = useState<Cheque | null>(null);

  const filteredCheques = cheques.filter(cheque => 
    filter === 'all' || cheque.status === filter
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Cheques</h2>
          <p className="text-gray-600">Track and manage your uploaded cheques</p>
        </div>

        <div className="flex items-center gap-3">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as 'all' | 'pending' | 'processing' | 'completed' | 'failed')}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      {filteredCheques.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Eye className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No cheques found</h3>
          <p className="text-gray-600">
            {filter === 'all' 
              ? "You haven't uploaded any cheques yet." 
              : `No cheques with ${filter} status found.`
            }
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredCheques.map((cheque) => (
            <div key={cheque.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Cheque Image */}
                <div className="lg:w-1/3">
                  <img
                    src={cheque.imageUrl}
                    alt="Cheque"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Cheque Details */}
                <div className="lg:w-2/3 space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{cheque.payeeName}</h3>
                      <p className="text-2xl font-bold text-purple-600">₹{cheque.amount.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(cheque.status)}
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(cheque.status)}`}>
                        {cheque.status.charAt(0).toUpperCase() + cheque.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Bank Name</p>
                      <p className="font-medium text-gray-900">{cheque.bankName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Cheque Number</p>
                      <p className="font-medium text-gray-900">{cheque.chequeNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-medium text-gray-900">{new Date(cheque.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Uploaded</p>
                      <p className="font-medium text-gray-900">{new Date(cheque.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>

                  {cheque.status === 'processing' && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-yellow-600 mr-3" />
                        <div>
                          <h4 className="font-medium text-yellow-900">Processing in Progress</h4>
                          <p className="text-yellow-700 text-sm">
                            Your cheque is being verified. This usually takes 2-5 minutes.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {cheque.status === 'completed' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <div>
                          <h4 className="font-medium text-green-900">Payment Completed</h4>
                          <p className="text-green-700 text-sm">
                            Funds transferred successfully on {cheque.processedAt ? new Date(cheque.processedAt).toLocaleString() : 'N/A'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedCheque(cheque)}
                      className="flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </button>
                    <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cheque Detail Modal */}
      {selectedCheque && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Cheque Details</h2>
              <button
                onClick={() => setSelectedCheque(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <img
                src={selectedCheque.imageUrl}
                alt="Cheque"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Payee Name</p>
                  <p className="font-medium text-gray-900">{selectedCheque.payeeName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="font-medium text-gray-900">₹{selectedCheque.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Bank Name</p>
                  <p className="font-medium text-gray-900">{selectedCheque.bankName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Cheque Number</p>
                  <p className="font-medium text-gray-900">{selectedCheque.chequeNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-medium text-gray-900">{new Date(selectedCheque.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(selectedCheque.status)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedCheque.status)}`}>
                      {selectedCheque.status.charAt(0).toUpperCase() + selectedCheque.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChequeList;