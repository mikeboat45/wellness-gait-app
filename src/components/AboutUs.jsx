export default function About() {
  return (
    <section className="bg-teal-700 py-4">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-white text-2xl pb-2 pt-8">About Us</h1>
        <div className="bg-blue-50  flex items-center justify-center w-2xl rounded-xl">
          <p className="text-teal-700 p-8 flex justify-center text-center font-medium text-xl">
            Your body has an incredible capacity to heal. Our purpose is to be
            your partner and guide, helping you unlock your full potential and
            get back to living without limits. We're here to help you rebuild
            your strength, restore your confidence, and rediscover the joy of
            movement
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-white  text-2xl pb-2 pt-8">Mission</h1>
        <div className="bg-blue-50  flex items-center justify-center w-2xl h-48 rounded-xl">
          <p className="text-teal-700 p-8 flex justify-center text-center font-medium text-xl">
            Our Mission is to empower individuals to achieve optimal physical
            health and well-being through personalized, evidence-based physical
            therapy, fostering recovery, restoring function, and promoting a
            pain-free, active lifestyle.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-white text-2xl pb-2 pt-8">Vision</h1>
        <div className="bg-blue-50  flex items-center justify-center w-2xl rounded-xl">
          <p className="text-teal-700 p-8 flex justify-center text-center font-medium text-xl">
            Our Vision is to be the leading partner in transformative physical
            wellness, recognized for clinical excellence, innovative care, and a
            compassionate environment where every patient reclaims their
            potential and embraces a life of unbounded movement.
          </p>
        </div>
      </div>
    </section>
  );
}
