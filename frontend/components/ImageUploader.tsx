import { useState } from "react";
import { uploadImage } from "@/utils/upload";

export default function ImageUploader() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            setLoading(true);
            const result = await uploadImage(selectedFile);
            setPrediction(result.prediction)
            setLoading(false)
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-md">
            <input type="file" onChange={handleFileChange} className="border p-2 rounded" />
            <button onClick={handleUpload} disabled={loading} className={`px-4 py-2 text-white rounded ${loading ? "bg-gray-400": "bg-blue-500 hover:bg-blue-600"} `} >
                {loading ? "Processing...": "Upload and Predict"}
            </button>
            {prediction && <p className="text-lg font-bold text-gray-700">Prediction: {prediction}</p>}
        </div>
    );
}