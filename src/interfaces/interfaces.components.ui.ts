import {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  PropsWithChildren,
  TextareaHTMLAttributes,
} from "react";
import { PropsWithClassName } from "./interfaces.custom";
import { PropsWithChildrenAndClassName } from "./interfaces.components";

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildrenAndClassName {
  isDisabled?: boolean;
  lightColorVersion?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  appearance: "accent" | "secondary" | "ghost";
  size: "s" | "m" | "l" | "xxl" | "none";
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  customClassName?: {
    input: string;
    label: string;
    container: string;
  };
  placeholder?: string;
}

export interface PtagProps
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    PropsWithChildren {
  size: "s" | "m" | "l" | "xl" | "xs";
  accent?: boolean;
  isActive?: boolean;
  className?: string;
  isError?: boolean;
  fontWeight?: "500" | "700" | "800";
  isOpacity?: boolean;
  isAccentColor?: boolean;
  isBold?: boolean;
}

export interface HtagProps
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    PropsWithChildren {
  tag: "h1" | "h2" | "h3";
  className?: string;
}

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    PropsWithClassName {
  label?: string;
  error?: string;
}
