import React from 'react';

export const If = (props: { test: boolean; children: any }) => {
  if (props.test) {
    return props.children;
  } else {
    return false;
  }
};
