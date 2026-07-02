import { useState, type FC } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Title } from "@/components/ui/typography"
import HiringListCard from "./hiring-list-card"
import HiringCardModal from "./hiring-list-card/card-modal"

interface HiringListProps {}

const HiringList: FC<HiringListProps> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleTriggerModal = (open: boolean) => setOpenModal(open)

  return (
    <>
      <Card className="gap-2 p-2">
        <CardHeader>
          <Title level={4}>Cashier</Title>
        </CardHeader>
        <CardContent className="p-2">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="p-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                  <HiringListCard onMore={handleTriggerModal} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardContent>
      </Card>

      <HiringCardModal open={openModal} onOpenChange={handleTriggerModal} />
    </>
  )
}

export default HiringList
