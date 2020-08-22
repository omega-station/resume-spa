// import '@testing-library/jest-dom/extend-expect';
// import { createSerializer } from 'jest-emotion';
// import * as emotion from '@emotion/core';

// expect.addSnapshotSerializer(createSerializer(emotion));

import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';

expect.addSnapshotSerializer(createSerializer(emotion));
