#!/usr/bin/env node

import { getAnswer } from '../games/commonFunction';
import { brainGsd } from '..';

const name = getAnswer('What is your name? ');
brainGsd(name);
