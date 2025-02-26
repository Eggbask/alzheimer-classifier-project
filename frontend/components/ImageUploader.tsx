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
                        <p className="text-[#112]">Your brain shows no significant signs of neurodegeneration, meaning there is currently no indication of early-stage Alzheimer’s. To maintain cognitive health, it’s important to engage in mentally stimulating activities such as reading, puzzles, or learning new skills, as these can strengthen neural connections and improve resilience against future cognitive decline. Regular physical activity, such as cardiovascular exercise, has been shown to reduce the risk of neurodegenerative diseases, so maintaining an active lifestyle is beneficial. Additionally, a diet rich in omega-3 fatty acids, antioxidants, and whole foods—like those found in the Mediterranean diet—can help protect brain health. Quality sleep is essential, as poor sleep has been linked to the buildup of amyloid plaques in the brain, which are associated with Alzheimer’s. While there are no immediate concerns, routine medical checkups and cognitive assessments can help establish a baseline for future reference and ensure any subtle changes are detected early.</p>
                    }
                    {prediction === "Very Mildly Demented" && 
                        <p className="text-[#112]">Your MRI results indicate very mild signs of neurodegeneration, which could be an early preclinical indicator of cognitive decline. At this stage, symptoms may be minimal or nonexistent, but it is important to start monitoring cognitive function through periodic assessments such as the Montreal Cognitive Assessment (MoCA) or Mini-Mental State Examination (MMSE). Engaging in cognitive stimulation activities, such as learning a new language, playing musical instruments, or participating in problem-solving tasks, can help maintain cognitive function. Addressing modifiable risk factors—such as managing high blood pressure, controlling blood sugar levels, and maintaining a healthy weight—may help slow progression. While there is no immediate need for medical intervention, consulting with a neurologist for baseline testing and lifestyle recommendations could be beneficial. A brain-healthy diet, proper hydration, and minimizing processed food consumption can further support cognitive health and slow potential progression.</p>
                    }
                    {prediction === "Mildly Demented" && 
                        <p className="text-[#112]">Your scan suggests mild cognitive impairment (MCI) or early-stage Alzheimer’s, meaning you may experience some memory issues, confusion, or difficulty with focus and recall. At this point, seeking medical consultation is highly recommended to confirm the diagnosis through further evaluations such as PET scans, genetic testing, or cognitive assessments. Early intervention is crucial, and programs like Cognitive Stimulation Therapy (CST) can help slow the progression of symptoms. It’s also important to begin planning for the future, including financial and legal considerations, while cognitive abilities are still intact. Increasing physical activity and engaging in mental exercises, such as strategic games or problem-solving tasks, can provide some neuroprotective effects. Depending on individual circumstances, medications like Donepezil or Memantine may be considered to help manage symptoms. Additionally, exploring clinical trials may be an option for those interested in experimental treatments that target early-stage Alzheimer's.</p>
                    }
                    {prediction === "Moderately Demented" && 
                        <p className="text-[#112]">Your scan indicates moderate neurodegeneration, suggesting that cognitive decline is now more pronounced and likely affecting daily activities. At this stage, medical attention should already be in place, and close supervision by a neurologist or dementia specialist is essential. Caregiver support, whether from family members or professional assistance, will likely become necessary as symptoms progress. Medication management is crucial for controlling symptoms, though it will not stop disease progression. Safety measures should also be implemented, including fall prevention strategies, home modifications, and reminders for daily tasks. Patients may also experience increased disorientation, so GPS tracking devices and structured routines can help maintain independence for as long as possible. Given the irreversible nature of the disease, legal and financial planning—such as establishing power of attorney and discussing long-term care options—should be a priority. Support groups and resources for both patients and caregivers can provide essential guidance during this transition.</p>
                    }
                </div>
            }
        </>
    );
}
