import { HeadersObj } from "../types";

export function defaultSecurityHeaders():HeadersObj[]{
  return [
    {
      key:"content-security-policy",
      value:"default-src 'self'",
    },
    {
      key:"referrer-policy",
      value:"origin",
    },
    {
      key:"x-frame-options",
      value:"DENY",
    },
    {
      key:"x-xss-protection",
      value:"1; mode=block",
    },
    {
      key:"x-content-type-options",
      value:"nosniff",
    },
    {
      key:"permissions-policy",
      value:'geolocation=()'
    },
    {
      key:"x-secured-by",
      value:"nudgeer-safe"
    }
  ]
}