package com.dlocal.plugins.datacollector;

import com.dlocal.datacollector.api.DLEnvironment;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.dlocal.datacollector.DLCollector;
import com.dlocal.datacollector.api.DLSettings;
import com.dlocal.datacollector.api.DLEnvironment;

import org.json.JSONException;
import org.json.JSONObject;

@CapacitorPlugin(name = "DataCollectorSDK")
public class DataCollectorSDKPlugin extends Plugin {

    public DLEnvironment getEnv(Integer env) {
        switch (env) {
            case 0: return DLEnvironment.PRODUCTION;
            case 1: return DLEnvironment.SANDBOX;
        }
        return DLEnvironment.PRODUCTION;
    }

    @PluginMethod
    public void setUp(PluginCall call) {
        String apiKey = call.getString("apiKey");
        Integer env = call.getInt("env");
        DLEnvironment environment = env != null ? getEnv(env) : DLEnvironment.PRODUCTION;

        if (apiKey == null || apiKey.isEmpty()) {
            call.reject("Missing api key");
            return;
        }

        DLCollector.setUp(this.getContext(), new DLSettings(apiKey, environment));

        call.resolve();
    }

    @PluginMethod
    public void startSession(PluginCall call) { 
        DLCollector.getInstance().startSession();
        call.resolve();
    }

    @PluginMethod
    public void getSession(PluginCall call) {
        JSObject response = new JSObject();
        try {
            String id = DLCollector.getInstance().getSessionId();
            response.put("sessionId", id);
        } catch (Exception e) {
            response.put("sessionId", null);
        }
        call.resolve(response);
    }
}
