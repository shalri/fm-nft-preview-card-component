import { nftData } from "@/lib/data";
import Image from "next/image";

interface NFTCardComponentProps {
  NFTId: string;
}

export default function NFTCardComponent({ NFTId }: NFTCardComponentProps) {
  // const nft = nftData.find(nft => nft.id === NFTId);
  const nft = nftData[0]


  return (
    <section className="p-6 text-nft-soft-blue flex flex-col text-left bg-nft-very-dark-blue-card rounded-2xl max-w-[352px]">
      <div className="relative w-full h-[280px] rounded-lg overflow-hidden sm:h-[304px]">
        <div className="absolute hover:bg-nft-cyan/30 backdrop-blur-sm w-full h-full bg-[url(/fm-nft-preview-card-component/images/icon-view.svg)] bg-no-repeat bg-[center] opacity-0 hover:opacity-100 transitiion-all duration-500 cursor-pointer" />
        <div className="bg-[url(/fm-nft-preview-card-component/images/image-equilibrium.jpg)] w-full h-full bg-cover bg-no-repeat bg-center" />
      </div>
      <div className="mt-5 sm:mt-6">
        <h1 className="text-[21px] font-bold text-nft-white tracking-wide">
          <a href="#" className="hover:text-nft-cyan transition-color duration-300">{nft.name} #{nft.id}</a>
        </h1>
        <p className="mt-2 sm:mt-4 leading-[1.68rem] text-lg">{nft.description}</p>
      </div>
      <div className="mt-3 sm:mt-5 flex justify-between items-center border-b border-nft-very-dark-blue-line pb-4 sm:pb-6">
        <h2 className="bg-[url(/fm-nft-preview-card-component/images/icon-ethereum.svg)] bg-[left_center] bg-no-repeat pl-4 text-nft-cyan font-semibold">{nft.value} ETH</h2>
        <p className="bg-[url(/fm-nft-preview-card-component/images/icon-clock.svg)] bg-[left_center] bg-no-repeat pl-6">{nft.daysLeft} days left</p>
      </div>
      <div className="mt-4 sm:pb-2 flex items-center">
        <Image src={nft.creatorAvatar} alt="Jules Wyvern" width="32" height="32" className="rounded-full border border-white" />
        <p className="pl-4">Creation of <a href="#" className="hover:text-nft-cyan text-nft-white transition-color duration-300">{nft.creator}</a></p>
      </div>
    </section>
  );
}
