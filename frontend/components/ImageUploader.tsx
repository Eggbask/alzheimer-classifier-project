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
        } else {
            alert("You must select an image to pass into the model")
        }
    };

    return (
        <>
            <p className="text-5xl text-[#1C2321] font-bold">Early Alzheimers Prediction Model</p>
            <div className="flex flex-col items-center space-y-4 p-6 bg-[#5f8ced] rounded-lg shadow-md">
                <input type="file" onChange={handleFileChange} className="border p-2 rounded border-indigo-800" accept="image/*" />
                <button onClick={handleUpload} disabled={loading} className={`px-4 py-2 text-white rounded ${loading ? "bg-gray-400": "bg-blue-600 hover:bg-blue-600"} `} >
                    {loading ? "Processing...": "Upload and Predict"}
                </button>
            </div>
            {prediction && 
                <div className="flex flex-col justify-center p-6 gap-3 bg-[#FFE1C6] rounded-lg shadow-lg max-w-md text-center">
                    <p className={`text-xl font-bold ${prediction === "Non Demented" ? "text-green-500" : prediction === "Very Mildly Demented" ? "text-yellow-400" : prediction === "Mildly Demented" ? "text-orange-500" : "text-red-500"}`}>Prediction: {prediction}</p>
                    {prediction === "Non Demented" && 
                        <p className="text-[#112]">No abnormal cognitive decline observed. The brain appears to be functioning normally. Research suggests that a healthy diet, consistent brain stimulating activity, and reducing stress through socialization could lower the risk of neuro-degenerative diseases</p>
                    }
                    {prediction === "Very Mildly Demented" && 
                        <p className="text-[#112]">Small degree of cognitive decline observed. There may be underlying symptoms in day-to-day life that go unnoticed, look out for lapses in recent memory, increased difficulty doing complex tasks, and struggling to find words during conversation. Consider seeking a cognitive assessment from a medical professional if memory issues persist.</p>
                    }
                    {prediction === "Mildly Demented" && 
                        <p className="text-[#112]">Noticeable cognitive decline observed. If you find yourself forgetting the names of familiar people and places, having difficulty following and recalling conversation, entering prolongued periods of confusion, or struggling with previously easy tasks, seek medical help. Heavily consider forming a support network of family and friends to help with tasks.</p>
                    }
                    {prediction === "Moderately Demented" && 
                        <p className="text-[#112]">Significant cognitive decline observed. At this stage, seek medical assistance if you are exhibiting heavy symptoms and haven't already. Follow the advice of doctors carefully and do as much as possible to maintain independence, such as physical activity and simple routines.</p>
                    }
                </div>
            }
        </>
    );
}