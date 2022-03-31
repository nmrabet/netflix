import React from "react";
import { Container } from './styles/footer';

export default function footer({ childre, ...restProps }) {
  return <Container>{...restProps}</Container>;
}
