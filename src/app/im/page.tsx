"use client";

import Card from "./Card";
import data from "./data";

export default function Home() {
  return (
    <div className="bg-purple-100 py-6 flex flex-col justify-center sm:py-12">
      {/* Passing the full data object for each Card */}
      <Card learnAbout="MySelf" data={data} />
      <Card learnAbout="Ourselves" data={data} />
      <Card learnAbout="Yourselves" data={data} />
      <Card learnAbout="Himselves" data={data} />
      <Card learnAbout="Herself" data={data} />
      <Card learnAbout="Themselves" data={data} />
      <Card learnAbout="Those" data={data} />
      <Card learnAbout="It" data={data} />
    </div>
  );
}
