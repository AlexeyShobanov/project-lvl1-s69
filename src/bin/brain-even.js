#!/usr/bin/env node

import { getAnswer } from '../games/commonFunction';
import { runBrainEven } from '..';

const name = getAnswer('What is your name? ');
runBrainEven()(name);
