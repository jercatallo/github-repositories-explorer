import { Environments } from "./types";

const {
  VITE_REACT_GITHUB_API_URL,
  VITE_REACT_GITHUB_API_TOKEN,
  VITE_REACT_GITHUB_API_USER_PER_PAGE_LIMIT,
  VITE_REACT_DEFAULT_LANGUAGE,
} = import.meta.env;

export const ENVIRONMENTS: Environments = {
  GITHUB_API_URL: VITE_REACT_GITHUB_API_URL,
  GITHUB_API_TOKEN: VITE_REACT_GITHUB_API_TOKEN,
  GITHUB_API_USER_PER_PAGE_LIMIT: VITE_REACT_GITHUB_API_USER_PER_PAGE_LIMIT,
  DEFAULT_LANGUAGE: VITE_REACT_DEFAULT_LANGUAGE,
};