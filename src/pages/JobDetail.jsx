import { useParams } from "react-router-dom";

function JobDetail() {
  const { slug } = useParams();

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">
        Job Detail
      </h1>

      <p className="text-gray-500">
        Slug: {slug}
      </p>
    </div>
  );
}

export default JobDetail;