import React, { useState } from 'react';
import { Upload, Camera, AlertCircle, CheckCircle } from 'lucide-react';
import { Cheque } from '../../types';

interface ChequeUploadProps {
  onUpload: (cheque: Omit<Cheque, 'id' | 'userId' | 'createdAt'>) => void;
}

const ChequeUpload: React.FC<ChequeUploadProps> = ({ onUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [extractedData, setExtractedData] = useState<{
    amount: string;
    payeeName: string;
    bankName: string;
    chequeNumber: string;
    date: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    amount: '',
    payeeName: '',
    bankName: '',
    chequeNumber: '',
    date: ''
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    setUploadedFile(file);
    setProcessing(true);

    // Simulate OCR processing
    setTimeout(() => {
      const mockExtractedData = {
        amount: '50000',
        payeeName: 'ABC Corporation Ltd',
        bankName: 'HDFC Bank',
        chequeNumber: '123456',
        date: '2024-01-15'
      };
      
      setExtractedData(mockExtractedData);
      setFormData(mockExtractedData);
      setProcessing(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const cheque: Omit<Cheque, 'id' | 'userId' | 'createdAt'> = {
      amount: parseFloat(formData.amount),
      payeeName: formData.payeeName,
      bankName: formData.bankName,
      chequeNumber: formData.chequeNumber,
      date: formData.date,
      status: 'pending',
      imageUrl: uploadedFile ? URL.createObjectURL(uploadedFile) : ''
    };

    onUpload(cheque);
    
    // Reset form
    setUploadedFile(null);
    setExtractedData(null);
    setFormData({
      amount: '',
      payeeName: '',
      bankName: '',
      chequeNumber: '',
      date: ''
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Cheque</h2>
        <p className="text-gray-600">Upload a clear image of your cheque for processing</p>
      </div>

      {/* File Upload Area */}
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
          dragActive 
            ? 'border-purple-400 bg-purple-50' 
            : 'border-gray-300 hover:border-purple-400 hover:bg-gray-50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {uploadedFile ? (
          <div className="space-y-4">
            <img 
              src={URL.createObjectURL(uploadedFile)} 
              alt="Uploaded cheque"
              className="max-w-full h-48 object-contain mx-auto rounded-lg shadow-lg"
            />
            <p className="text-green-600 font-medium">✓ File uploaded successfully</p>
            <button
              onClick={() => {
                setUploadedFile(null);
                setExtractedData(null);
                setFormData({
                  amount: '',
                  payeeName: '',
                  bankName: '',
                  chequeNumber: '',
                  date: ''
                });
              }}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Upload Different Image
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              <Upload className="h-12 w-12 text-gray-400" />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">Drop your cheque image here</p>
              <p className="text-gray-600">or click to browse files</p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer"
            >
              <Camera className="h-5 w-5 mr-2" />
              Choose File
            </label>
            <p className="text-sm text-gray-500">Supports: JPG, PNG, HEIC (Max 5MB)</p>
          </div>
        )}
      </div>

      {/* Processing Status */}
      {processing && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
            <div>
              <h3 className="font-semibold text-blue-900">Processing Cheque...</h3>
              <p className="text-blue-700">Our AI is extracting information from your cheque</p>
            </div>
          </div>
        </div>
      )}

      {/* Extracted Data Form */}
      {extractedData && !processing && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
            <h3 className="font-semibold text-green-900">Information Extracted Successfully</h3>
          </div>
          <p className="text-green-700 mb-4">Please verify the extracted information below:</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount (₹)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payee Name
                </label>
                <input
                  type="text"
                  name="payeeName"
                  value={formData.payeeName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bank Name
                </label>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cheque Number
                </label>
                <input
                  type="text"
                  name="chequeNumber"
                  value={formData.chequeNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-900">Important Notice</h4>
                  <p className="text-yellow-700 text-sm">
                    Please verify all extracted information is correct before submitting. 
                    Incorrect information may cause processing delays.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
            >
              Submit for Processing
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChequeUpload;