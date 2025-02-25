import ImageUploader from "@/components/ImageUploader";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-start gap-[4rem] p-[4rem] min-h-screen bg-slate-500">
            <ImageUploader />
        </div>
    )
}