/** src/Components/Profile.jsx **/
import React from "react";

export const Profile = ({
  name,
  ocupation,
  location,
  email,
  telephone,
  image,
}) => {
  return (
    <div id="profile" className="flex items-center gap-6">
      <img
        src={image}
        alt={name}
        className="h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-soft"
      />
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{name}</h1>
        <p className="mt-1 text-slate-600">{ocupation}</p>
        <div className="mt-3 grid gap-1 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <i className="bx bx-map" />
            {location}
          </div>
          <a
            className="flex items-center gap-2 hover:text-primary-700"
            href={`mailto:${email}`}
          >
            <i className="bx bx-envelope" />
            {email}
          </a>
          <a
            className="flex items-center gap-2 hover:text-primary-700"
            href={`tel:${telephone}`}
          >
            <i className="bx bx-phone" />
            {telephone}
          </a>
        </div>
      </div>
    </div>
  );
};
