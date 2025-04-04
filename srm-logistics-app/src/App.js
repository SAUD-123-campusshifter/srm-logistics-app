import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";

export default function LogisticsBookingApp() {
  const [form, setForm] = useState({
    name: "", contact: "", pickup: "", drop: "", items: "", language: "en",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleLanguageChange = (value) => setForm({ ...form, language: value });
  const handleSubmit = async () => {
    if (form.name && form.contact && form.pickup && form.drop) {
      try {
        console.log("Booking data submitted:", form);
        setSubmitted(true);
      } catch (error) {
        console.error("Submission failed:", error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card className="p-4 shadow-xl">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">{form.language === "ta" ? "எஸ்ஆர்எம் முகாமிலுள்ள பார்சல் சேவை" : "SRM Campus Logistics"}</h2>
          {!submitted ? (
            <div className="space-y-3">
              <Select onValueChange={handleLanguageChange} defaultValue={form.language}>
                <SelectTrigger><SelectValue placeholder="Select Language" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ta">Tamil</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                  <SelectItem value="te">Telugu</SelectItem>
                  <SelectItem value="ml">Malayalam</SelectItem>
                  <SelectItem value="kn">Kannada</SelectItem>
                  <SelectItem value="mr">Marathi</SelectItem>
                  <SelectItem value="bn">Bengali</SelectItem>
                  <SelectItem value="gu">Gujarati</SelectItem>
                  <SelectItem value="pa">Punjabi</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Your Name" name="name" value={form.name} onChange={handleChange} />
              <Input placeholder="Contact Number" name="contact" value={form.contact} onChange={handleChange} />
              <Input placeholder="Pickup Location" name="pickup" value={form.pickup} onChange={handleChange} />
              <Input placeholder="Drop Location" name="drop" value={form.drop} onChange={handleChange} />
              <Textarea placeholder="Items to be moved (optional)" name="items" value={form.items} onChange={handleChange} />
              <Button onClick={handleSubmit} className="w-full">Book Now</Button>
            </div>
          ) : (
            <div className="text-center space-y-2">
              <p className="text-green-600 font-semibold">Booking Received Successfully!</p>
              <p className="text-sm text-gray-500">We'll contact you shortly at {form.contact}</p>
              <Button onClick={() => setSubmitted(false)} className="mt-2">Make Another Booking</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}