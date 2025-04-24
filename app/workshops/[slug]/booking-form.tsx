"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/booking-modal";
import { Workshop } from "@/lib/data";

export function BookingForm({ workshop }: { workshop: Workshop }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div>
      <Button 
        variant="coral" 
        size="lg" 
        className="w-full"
        onClick={() => setIsModalOpen(true)}
      >
        Book Now
      </Button>
      
      <BookingModal
        workshop={workshop}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}