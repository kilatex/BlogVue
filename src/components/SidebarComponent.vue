<template>
                <aside id="sidebar">
                <div id="nav-blog" class="sidebar-item">
                    <h3>You Can do this</h3>
                    <a href="#" class="btn btn-form">Create Post</a>
                </div>

                <div id="search" class="sidebar-item">
                        <h3>Searcher</h3>
                        <p>Find posts</p>
                        <form>
                            <input type="text" name="search" />
                            <input type="submit" name="submit" value="Search" class="btn btn-form" />
                        </form>
                </div>
                </aside>


</template>

<script>

export default {
    name: 'SidebarComponent'
}

</script>