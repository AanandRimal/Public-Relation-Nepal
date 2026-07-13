import { cache } from "react";
import { getContentRepository } from "../get-repository";

export const getSettings = cache(() => getContentRepository().getSettings());
export const getHomepage = () => getContentRepository().getHomepage();
export const getAbout = () => getContentRepository().getAbout();
export const getServices = () => getContentRepository().getServices();
export const getServiceBySlug = (slug: string) =>
  getContentRepository().getServiceBySlug(slug);
export const getPortfolio = () => getContentRepository().getPortfolio();
export const getPortfolioBySlug = (slug: string) =>
  getContentRepository().getPortfolioBySlug(slug);
export const getPortfolioByCategory = (category: string) =>
  getContentRepository().getPortfolioByCategory(category);
export const getIndustries = () => getContentRepository().getIndustries();
export const getIndustryBySlug = (slug: string) =>
  getContentRepository().getIndustryBySlug(slug);
export const getBlogs = () => getContentRepository().getBlogs();
export const getBlogBySlug = (slug: string) =>
  getContentRepository().getBlogBySlug(slug);
export const getTeam = () => getContentRepository().getTeam();
export const getTestimonials = () => getContentRepository().getTestimonials();
export const getClients = () => getContentRepository().getClients();
export const getAwards = () => getContentRepository().getAwards();
export const getResources = () => getContentRepository().getResources();
export const getResourceBySlug = (slug: string) =>
  getContentRepository().getResourceBySlug(slug);
