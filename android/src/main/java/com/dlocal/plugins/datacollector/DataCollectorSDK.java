package com.dlocal.plugins.datacollector;

import android.util.Log;

public class DataCollectorSDK {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
