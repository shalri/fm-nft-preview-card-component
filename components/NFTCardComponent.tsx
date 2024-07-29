import { nftData } from "@/lib/data";
import Image from "next/image";

interface NFTCardComponentProps {
  NFTId: string;
}

export default function NFTCardComponent({ NFTId }: NFTCardComponentProps) {
  // const nft = nftData.find(nft => nft.id === NFTId);
  const nft = nftData[0]


  return (
    <section className="p-6 flex flex-col items-center justify-center text-center bg-nft-very-dark-blue-card max-w-[375px]">
      <div className="bg-[url(/images/image-equilibrium.jpg)] w-full h-[280px] bg-cover bg-no-repeat bg-center" />
      <h1 className="text-3xl font-bold text-zinc-500">
        {nft.name} #{nft.id}
      </h1>
      <p className="">{nft.description}</p>
      <div className="">
        <h2 className="">{nft.value}</h2>
        <p className="">{nft.daysLeft} days left</p>
      </div>
      <div className="">
        <Image src={nft.creatorAvatar} alt="Jules Wyvern" />
        <p className="">Creation of {nft.creator}</p>
      </div>
    </section>
  );
}
