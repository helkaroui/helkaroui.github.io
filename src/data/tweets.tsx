/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @docusaurus/no-untranslated-text */

import React from 'react';

import type {Props as Tweet} from '../components/Tweet';

export type TweetItem = Tweet & {
  showOnHomepage: boolean;
};

const TWEETS: TweetItem[] = [
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'acemarke',
    name: 'Mark Erikson',
    date: 'Oct 26, 2021',
    content: (
      <>
        We&apos;ve been using Docusaurus for all the Redux org docs sites for
        the last couple years, and it&apos;s great! We&apos;ve been able to
        focus on content, customize some presentation and features, and It Just
        Works.
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'markerikson',
  },
  {
    url: 'https://twitter.com/arcanis/status/1351620354561732608',
    handle: 'arcanis',
    name: 'Maël',
    date: 'Jan 20, 2021',
    content: (
      <>
        I&apos;ve used Docusaurus for two websites this year, and I&apos;ve been
        very happy about the v2. Looks good, and simple to setup.
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'arcanis',
  },
  {
    url: 'https://twitter.com/maxlynch/status/1375113166007455748',
    handle: 'maxlynch',
    name: 'Max Lynch',
    date: 'Mar 25, 2021',
    content: (
      <>
        Docusaurus v2 doubles as a really nice little static site generator tool
        for content-focused sites, love it 👏
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'mlynch',
  }
];

export default TWEETS;