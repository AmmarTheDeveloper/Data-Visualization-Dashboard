import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  BarChart3,
  Bell,
  Cable,
  Globe,
  Home,
  LayoutPanelTop,
  SquarePen,
  Users,
} from "lucide-react";

export const Sidebar = () => {
  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 font-semibold"
            >
              <span className="">Dashboard</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                to="/dashboard/intensity"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <BarChart3 className="h-4 w-4" />
                Intensity Chart
              </Link>
              <Link
                to="/dashboard/topics-region"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <SquarePen className="h-4 w-4" />
                Topics And Region Chart
              </Link>
              <Link
                to="/dashboard/relevance"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Cable className="h-4 w-4" />
                Relevance Chart
              </Link>
              <Link
                to="/dashboard/sector-likelihood"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LayoutPanelTop className="h-4 w-4" />
                Sector And Likelihood Chart
              </Link>
              <Link
                to="/dashboard/country"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Globe className="h-4 w-4" />
                Country Chart
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
