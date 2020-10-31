import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

export default function SearchPage({}) {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  return {
    props: {},
  };
};
