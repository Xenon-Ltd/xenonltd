import createSocialImage from "@/shared/lib/create-social-image";

export const alt = "Xenon — Africa's Financial Operating System";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage();
}
