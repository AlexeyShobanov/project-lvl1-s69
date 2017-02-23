#!/usr/bin/env node

import { getAnswer } from '../games/commonFunction';
import { runBrainGcd } from '..';

const name = getAnswer('What is your name? ');
runBrainGcd()(name);
