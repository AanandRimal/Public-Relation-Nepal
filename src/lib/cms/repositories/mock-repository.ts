import type { ContentRepository } from "../interfaces/content-repository";
import { siteSettings } from "@/data/settings";
import { services } from "@/data/services";
import { portfolioProjects } from "@/data/portfolio";
import {
  industries,
  teamMembers,
  testimonials,
  clients,
  awards,
  blogPosts,
  resources,
  homepage,
  aboutPage,
} from "@/data/content";

export const mockRepository: ContentRepository = {
  async getSettings() {
    return siteSettings;
  },

  async getHomepage() {
    return homepage;
  },

  async getAbout() {
    return aboutPage;
  },

  async getServices() {
    return services;
  },

  async getServiceBySlug(slug: string) {
    return services.find((s) => s.slug === slug) ?? null;
  },

  async getPortfolio() {
    return portfolioProjects;
  },

  async getPortfolioBySlug(slug: string) {
    return portfolioProjects.find((p) => p.slug === slug) ?? null;
  },

  async getPortfolioByCategory(category: string) {
    return portfolioProjects.filter((p) => p.category === category);
  },

  async getIndustries() {
    return industries;
  },

  async getIndustryBySlug(slug: string) {
    return industries.find((i) => i.slug === slug) ?? null;
  },

  async getBlogs() {
    return blogPosts;
  },

  async getBlogBySlug(slug: string) {
    return blogPosts.find((b) => b.slug === slug) ?? null;
  },

  async getTeam() {
    return teamMembers;
  },

  async getTestimonials() {
    return testimonials;
  },

  async getClients() {
    return clients;
  },

  async getAwards() {
    return awards;
  },

  async getResources() {
    return resources;
  },

  async getResourceBySlug(slug: string) {
    return resources.find((r) => r.slug === slug) ?? null;
  },
};
