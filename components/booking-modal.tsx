"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import { Workshop } from "@/lib/data";

interface BookingModalProps {
  workshop: Workshop;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingModal({ workshop, open, onOpenChange }: BookingModalProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus("loading");
    
    // Simulate API call
    try {
      // In a real app, you would call your booking API here
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setStatus("success");
      
      // Reset form after short delay
      setTimeout(() => {
        setStatus("idle");
        setFormState({
          name: "",
          email: "",
          phone: "",
          specialRequests: "",
        });
        onOpenChange(false);
      }, 2000);
    } catch (error) {
      setStatus("error");
    }
  };
  
  if (status === "success") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center justify-center py-8">
            <div className="rounded-full bg-teal-100 p-3 mb-4">
              <Check className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-2xl font-playfair font-bold text-center">Booking Confirmed!</h2>
            <p className="mt-4 text-center text-neutral-600">
              Thank you for booking {workshop.title}. We've sent a confirmation email with all the details.
            </p>
            <Button 
              variant="coral" 
              className="mt-6"
              onClick={() => {
                setStatus("idle");
                onOpenChange(false);
              }}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-playfair">Book Workshop</DialogTitle>
          <DialogDescription>
            Reserve your spot for {workshop.title} on {new Date(workshop.date).toLocaleDateString()}.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              rows={3}
              value={formState.specialRequests}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <p className="text-sm text-neutral-500">
              Price: <span className="font-semibold">${workshop.price}</span>
            </p>
            <p className="text-sm text-neutral-500">
              Location: Our Studio at 123 Craft St.
            </p>
          </div>
          
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={status === "loading"}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant="coral"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                "Confirm Booking"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}