import { useEffect, useState } from "react";

const Popup = () => {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [imgPreview, setImgPreview] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/popup/get")
      .then((res) => res.json())
      .then((res) => {
        setData(res);

        setTimeout(() => setShow(true), 100);
      });
  }, []);

  if (!data) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4 transition-opacity duration-500 ${show ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >

        {/* MAIN CARD */}
        <div
          className={`relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] grid md:grid-cols-2 transform transition-all duration-500 ${show
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
            }`}
        >

          {/* LEFT IMAGE */}
          {data.image && (
            <div
              className="relative h-64 md:h-full cursor-pointer group"
              onClick={() => setImgPreview(true)}
            >
              <img
                src={`http://localhost:5000/uploads/${data.image}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              {/* Zoom Hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-white text-sm">
                Click to View
              </div>

              {/* Branding */}
              <div className="absolute bottom-6 left-6 text-white">
                <img
                  src="https://i.ibb.co/HDmZrzyW/LD-CUCINE.png"
                  className="w-12 mb-2"
                />
                <h2 className="text-lg tracking-widest">LD CUCINE</h2>
                <p className="text-xs text-gray-300">
                  Premium Kitchen Interiors
                </p>
              </div>
            </div>
          )}

          {/* RIGHT CONTENT */}
          <div className="p-8 flex flex-col justify-center relative">

            {/* Close */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-gray-300 hover:bg-black hover:text-white transition"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              {data.title}
            </h2>

            <p className="text-gray-900 text-sm mb-6">
              {data.description}
            </p>

            {data.buttonText && (
              <a
                href={data.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit px-6 py-3 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition"
              >
                {data.buttonText}
              </a>
            )}

            <div className="my-6 h-[1px] bg-gray-200"></div>

            <div className="text-sm text-gray-900 space-y-1">
              <p>C/16, Aruna Park, Lakshmi Nagar</p>
              <p>Delhi - 110092</p>
              <p className="font-medium text-gray-800">
                +91 9911159579
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE FULL PREVIEW */}
      {imgPreview && (
        <div
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4"
          onClick={() => setImgPreview(false)}
        >
          <img
            src={`http://localhost:5000/uploads/${data.image}`}
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />

          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setImgPreview(false)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default Popup;