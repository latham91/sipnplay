import Image from "next/image";
import CardCTA from "./CardCTA";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function Reservations() {
  // Opening times for the time section bellow
  const time = [
    <>
      <span className="font-bold text-stone-600">🕒 Sunday:</span> 10am - 11pm
    </>,
    <>
      <span className="font-bold text-stone-600">🕧 Monday - Thursday:</span>{" "}
      11am - 11pm
    </>,
    <>
      <span className="font-bold text-stone-600">🕒 Friday:</span> 11am - 12am
    </>,
    <>
      <span className="font-bold text-stone-600">🕒 Saturday:</span> 10am - 12am
    </>,
  ];

  // Contact information for the contact section bellow
  const ContactInfo = [
    {
      text: "sipnplaynyc@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      text: (
        <>
          471 5th Ave. Brooklyn, <br />
          NY 11215
        </>
      ),
      icon: <FaLocationDot />,
    },

    { text: "718-971-1684", icon: <FaPhone /> },
  ];

  // Bellow is the data I will need to fill out my card that I made as a component
  const CTA = {
    title: "📅 Reservations",
    description: (
      <>
        Secure your place at our vibrant café and board game haven. Whether
        you're planning a casual meetup or a lively game night with friends,
        reserve your table now to ensure a memorable experience filled with
        great food, refreshing drinks, and endless fun. <br />
        <br />
        <span className="bg-stone-800 text-stone-50 font-bold px-2">
          Reservations are open for any party size!
        </span>
        <br />
        <span className="font-bold text-stone-600">
          For large parties (9+ or more people), please email us at
          sipnplaynyc@gmail.com to inquire about a reservation.{" "}
        </span>
        <br />
        <br />
      </>
    ),
    href: "https://www.exploretock.com/sipnplay",
    image: "/SipNPlay 3.png",
    btn: "Make a Reservation",
  };

  return (
    <div className="relative z-20 bg-stone-50">
      {/* 🔻 SECTION: Time */}
      <div className="margin-x margin-y grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* 🔻 Image */}
        <div className="relative">
          <Image
            src="/SipNPlay 1.png"
            width={500}
            height={500}
            draggable={false}
            className="relative z-[1] object-cover h-[400px] lg:h-[550px] w-full hover:rotate-3 my-transition opacity-90 hover:opacity-100"
          />
          <div className="absolute top-0 left-0 h-[400px] lg:h-[550px] w-full bg-stone-800" />
        </div>
        {/* 🔻 Title + description */}
        <div className="flex flex-col gap-16 items-start">
          <div className="flex flex-col items-start">
            <h1 className="relative z-20 bg-stone-900 text-stone-50 px-4 md:px-6 py-2 -mb-2 hover:scale-110 my-transition">
              Hours and
            </h1>
            <h1 className="relative z-10 bg-[#dde9d3] px-4 md:px-6 py-2 hover:scale-110 my-transition">
              Location
              <span className="text-5xl max-md:text-4xl max-sm:text-3xl">
                🗺️
              </span>
            </h1>
          </div>
          <p>
            We're open all week to fit your plans! Whether you're planning a
            weekend outing or a midweek break, check out our hours below to find
            the perfect time to visit:
          </p>
          <p className="-my-6">
            {time.map((t) => (
              <p key={t} className="hover:scale-110 my-transition">
                {t}
              </p>
            ))}
          </p>
          {/* 🔻 Kitchen closing time tag */}
          <div className="flex max-sm:flex-col items-start">
            <div className="bg-stone-900 px-3 h-[36px] flex items-center">
              <p className="text-stone-50 font-bold text-sm">⚠️ Attention</p>
            </div>
            <div className="bg-[#dde9d3] text-stone-50 px-3 h-[36px] flex items-center">
              <p className="text-stone-900 font-bold text-sm">
                Our kitchen closes 2.5-3 hours before we close!{" "}
              </p>
              ​
            </div>
          </div>
        </div>
      </div>
      {/* 🔻 SECTION: Location */}
      <div className="margin-x py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 items-start">
        {ContactInfo.map((contact) => (
          <div
            key={contact.text}
            className="flex flex-col items-start md:items-center md:justify-center gap-4 text-left md:text-center md:hover:scale-110 my-transition"
          >
            <p className="text-xl  bg-[#dde9d3] p-4 rounded-full text-stone-800">
              {contact.icon}
            </p>
            <h5>{contact.text}</h5>
          </div>
        ))}
      </div>
      {/* 🔻 SECTION: CTA */}
      <div className="margin-x margin-y">
        <CardCTA data={CTA} />
      </div>
    </div>
  );
}
