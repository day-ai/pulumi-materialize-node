import * as pulumi from "@pulumi/pulumi";
export declare class ScimConfig extends pulumi.CustomResource {
    /**
     * Get an existing ScimConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScimConfigState, opts?: pulumi.CustomResourceOptions): ScimConfig;
    /**
     * Returns true if the given object is an instance of ScimConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ScimConfig;
    /**
     * The name of the SCIM 2.0 connection. It must be unique.
     */
    readonly connectionName: pulumi.Output<string>;
    /**
     * The creation timestamp of the SCIM 2.0 configuration.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * The provisioning URL of the SCIM 2.0 configuration.
     */
    readonly provisioningUrl: pulumi.Output<string>;
    readonly scimConfigId: pulumi.Output<string>;
    /**
     * The source of the SCIM 2.0 configuration. Supported values are `okta`, `azure-ad`, and `other`.
     */
    readonly source: pulumi.Output<string>;
    /**
     * Indicates whether automatic synchronization of data with the IdP is enabled, ensuring that changes in details or status
     * in the IdP are updated accordingly.
     */
    readonly syncToUserManagement: pulumi.Output<boolean>;
    readonly tenantId: pulumi.Output<string>;
    /**
     * The token of the SCIM 2.0 configuration.
     */
    readonly token: pulumi.Output<string>;
    /**
     * Create a ScimConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScimConfigArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ScimConfig resources.
 */
export interface ScimConfigState {
    /**
     * The name of the SCIM 2.0 connection. It must be unique.
     */
    connectionName?: pulumi.Input<string>;
    /**
     * The creation timestamp of the SCIM 2.0 configuration.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The provisioning URL of the SCIM 2.0 configuration.
     */
    provisioningUrl?: pulumi.Input<string>;
    scimConfigId?: pulumi.Input<string>;
    /**
     * The source of the SCIM 2.0 configuration. Supported values are `okta`, `azure-ad`, and `other`.
     */
    source?: pulumi.Input<string>;
    /**
     * Indicates whether automatic synchronization of data with the IdP is enabled, ensuring that changes in details or status
     * in the IdP are updated accordingly.
     */
    syncToUserManagement?: pulumi.Input<boolean>;
    tenantId?: pulumi.Input<string>;
    /**
     * The token of the SCIM 2.0 configuration.
     */
    token?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ScimConfig resource.
 */
export interface ScimConfigArgs {
    /**
     * The name of the SCIM 2.0 connection. It must be unique.
     */
    connectionName: pulumi.Input<string>;
    scimConfigId?: pulumi.Input<string>;
    /**
     * The source of the SCIM 2.0 configuration. Supported values are `okta`, `azure-ad`, and `other`.
     */
    source: pulumi.Input<string>;
}
