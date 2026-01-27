"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPlus, FaRegEye, FaRegFolderOpen } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FiClock, FiDownload, FiLayers } from "react-icons/fi";
import { IoColorPaletteOutline, IoImageOutline } from "react-icons/io5";

const Dashboard = () => {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const quickActions = [
    {
      label: "New Design",
      description: "Start a fresh project",
      icon: FaPlus,
      onClick: () => router.push("/dashboard/create"),
    },
    {
      label: "View Gallery",
      description: "Browse all designs",
      icon: IoImageOutline,
      onClick: () => router.push("/dashboard/gallery"),
    },
    {
      label: "Portfolio",
      description: "Manage showcase",
      icon: FiLayers,
      onClick: () => router.push("/dashboard/portfolio"),
    },
  ];
  const stats = [
    {
      label: "Total Designs",
      value: "156",
      change: "+12 this week",
      icon: IoColorPaletteOutline,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      label: "Active Projects",
      value: "8",
      change: "3 in progress",
      icon: FaRegFolderOpen,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      label: "Total Views",
      value: "12.4K",
      change: "+2.3K this month",
      icon: FaRegEye,
      gradient: "from-orange-500 to-red-500",
    },
    {
      label: "Downloads",
      value: "847",
      change: "+127 this week",
      icon: FiDownload,
      gradient: "from-green-500 to-emerald-500",
    },
  ];
  return (
      <main className="container mx-auto px-2 py-8">
        {/* Welcome Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                Welcome back!
              </h2>
              <p className="text-lg text-[#00002D]">
                Here's what's happening with your designs today.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[#00002D]">
              <FiClock className="w-4.5 h-4.5" />
              <span className="text-sm ">
                {currentTime.toLocaleString("en-US", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#e5e5e5] text-[#00000A] shadow cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={action.onClick}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-[#00000A] text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#00000A] mb-1">
                          {action.label}
                        </h3>
                        <p className="text-sm text-[#00002d9c]">
                          {action.description}
                        </p>
                      </div>
                      <FaArrowRight className="w-4 text-[#00002d9c]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#e5e5e5] text-[#00000A] shadow hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 rounded-xl bg-linear-to-br ${stat.gradient} text-white`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-[#00002d9c] mb-1">
                        {stat.label}
                      </p>
                      <p className="text-3xl font-bold text-[#00000A] mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs text-[#00002d9c]">{stat.change}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recent Designs */}
        {/* <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground">
              Recent Designs
            </h3>
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard/gallery")}
            >
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentDesigns.map((design, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={design.thumbnail}
                    alt={design.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className="absolute top-3 right-3"
                    variant={
                      design.status === "Published" ? "default" : "secondary"
                    }
                  >
                    {design.status}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <div className="mb-3">
                    <h4 className="font-semibold text-foreground mb-1">
                      {design.title}
                    </h4>
                    <p className="text-sm text-[#00002D]">
                      {design.category}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-[#00002D]">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{design.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{design.likes}</span>
                      </div>
                    </div>
                    <span>{design.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}
      </main>
  );
};

export default Dashboard;
