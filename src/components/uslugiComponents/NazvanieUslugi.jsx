import { Image } from "@chakra-ui/react"

const NazvanieUslugi = () => {
    return (
        <div className="w-full bg-[#000000]">
            <div className="w-full h-[567px] flex justify-between  items-center max-w-[1250px] text-white mx-auto">
                <div className="flex max-w-[600px] flex-col justify-start items-start gap-5">
                    <h1 className="text-[60px] font-[500]">Название услуги</h1>
                    <p className="text-[16px] font-[500]">
                        съешь же ещё этих мягких французских булок, да выпей чаю съешь
                        же ещё этих мягких французских булок, да выпей чаю
                        съешь же ещё этих мягких
                        французских булок, да выпей чаю
                    </p>
                    <p className="text-[16px] font-[500]">
                        съешь же ещё этих мягких французских булок, да выпей чаю съешь
                        же ещё этих мягких французских булок, да выпей чаю
                        съешь же ещё этих мягких
                        французских булок, да выпей чаю
                    </p>

                </div>
                <div >
                    <img src="../../../naz.png" alt="Nazvanie"
                        className="w-[626px] h-[397px] filter drop-shadow-[0_1px_30px_rgba(255,255,255,0.3)]"

                    />
                </div>
            </div>
        </div>
    )
}

export default NazvanieUslugi
