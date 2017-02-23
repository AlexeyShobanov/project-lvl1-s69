#!/usr/bin/env node

import { getAnswer } from '../games/commonFunction';
import { runBrainCalc } from '..';

const name = getAnswer('What is your name? ');
runBrainCalc()(name);
