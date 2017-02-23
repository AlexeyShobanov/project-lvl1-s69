#!/usr/bin/env node

import { getAnswer } from '../games/commonFunction';
import { brainCalc } from '..';

const name = getAnswer('What is your name? ');
brainCalc(name);
