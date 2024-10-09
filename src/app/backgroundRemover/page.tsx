"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { removeBackground } from "@imgly/background-removal";
import { useEffect, useState } from "react";

export default function page() {
  type ImageFile = string ;
  const [selectedImg, setSelectedImg] = useState<ImageFile>('');
  const [bgRmdImg, setBgRmdImg] = useState<ImageFile>('');

  function updateImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || !e.target.files[0]) return;
    setSelectedImg(URL.createObjectURL(e.target.files[0]));
  }

  function removeBg() {
    console.log("Removing Bg");
    removeBackground(selectedImg).then((e) => {
      setBgRmdImg(URL.createObjectURL(e));
    });
  }
  useEffect(() => {
    if (!selectedImg) return;
    removeBg();
  }, [selectedImg]);

  return (
    <div className="">
      <br />
      <div className="  w-1/3 mx-auto">
        <div className="flex">
          <h1 className="text-3xl from-slate-500 to-slate-400 bg-gradient-to-r p-4 text-white w-full rounded-t-lg">
            Remove Background
          </h1>
        </div>
        <div className="grid grid-cols-2 h-56 w-max overflow-auto">
          <img src={selectedImg} alt="" style={{ width: "15rem" }} />
          <img src={bgRmdImg} alt="" style={{ width: "15rem" }} />
        </div>
        <Label>Select a image</Label>
        <Input type="file" onChange={updateImage} />
      </div>
    </div>
  );
}
