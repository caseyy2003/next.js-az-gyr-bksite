"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import LeadCaptureForm from "@/components/LeadCaptureForm";

interface ClientMDXRendererProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function ClientMDXRenderer({ mdxSource }: ClientMDXRendererProps) {
  return <MDXRemote {...mdxSource} components={{ LeadCaptureForm }} />;
}
