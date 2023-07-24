export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard", "/customer", "/project", "/projects"],
};
