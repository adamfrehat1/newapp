"use client";

import { useState } from "react";

import { Banner } from "@/components/banner";
import { BottomNav } from "@/components/bottom-nav";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { AddShopView } from "@/components/views/add-shop-view";
import { HomeView } from "@/components/views/home-view";
import { PlaceholderView } from "@/components/views/placeholder-view";

type ViewType = "home" | "messages" | "add" | "favorites" | "profile";

export function SpareApp() {
  const [view, setView] = useState<ViewType>("home");

  return (
    <>
      <ThemeToggle />
      <main className="mx-auto w-full max-w-xl flex-1 px-4 pb-28 pt-16">
        <Header />
        <Banner />
        {view === "home" && <HomeView />}
        {view === "add" && <AddShopView />}
        {view === "messages" && <PlaceholderView title="الرسائل" />}
        {view === "favorites" && <PlaceholderView title="المفضلة" />}
        {view === "profile" && <PlaceholderView title="حسابي" />}
      </main>
      <BottomNav activeView={view} onChange={setView} />
    </>
  );
}
